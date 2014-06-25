require 'fileutils'
require 'tempfile'

module CoffeeCommentConverter
  BLOCK_COMMENT = '###'
  SINGLE_LINE_COMMENT = '#'

  class Converter
    def initialize(file:)
      @file = file
    end

    def process
      in_block_comment = false
      filename = File.basename(@file)
      tmp_filename = filename + '.tmp'
      tmp = Tempfile.new(tmp_filename)

      @file.each_line do |line|
        line = Line.new(line)
        if line.toggles_block_comment?
          in_block_comment = !in_block_comment
        elsif !in_block_comment && line.is_slc?
          line.to_bc
        end
        tmp.write(line.line)
      end

      FileUtils.mv(tmp.path, @file.path)
      tmp.close
    end
  end

  class Line
    attr_accessor :line

    def initialize(line)
      @line = line
    end

    def is_slc?
      line.index(SINGLE_LINE_COMMENT) === 0
    end

    # to block comment
    def to_bc
      if is_slc?
        text = line.sub(/\A#+/, '').strip
        self.line = BLOCK_COMMENT + "\n" + text + "\n" + BLOCK_COMMENT + "\n"
      end
    end

    def toggles_block_comment?
      # N.b. toggles a block comment if there are an odd number of block comments
      line.scan(BLOCK_COMMENT).count % 2 != 0
    end

    def to_s
      line
    end
  end
end

ARGV.each do |filename|
  File.open(filename, 'r') do |file|
    CoffeeCommentConverter::Converter.new(file: file).process
  end
end
