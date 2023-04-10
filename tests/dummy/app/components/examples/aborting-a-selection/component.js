import Component from '@glimmer/component';
import { action } from '@ember/object';

let shouldAbortSelection;

export default class AbortingASelectionExampleComponent extends Component {
  // BEGIN-SNIPPET docs-example-aborting-a-selection.js
  @action
  selectRows(selection, { abort }) {
    if (shouldAbortSelection(selection)) {
      abort();
      return;
    }

    this.selection = selection;
  }
  // END-SNIPPET
}
