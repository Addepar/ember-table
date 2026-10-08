import { LinkTo } from '@ember/routing';

<template>
  <ul>
    <li><LinkTo @route="scenarios.simple">Simple</LinkTo></li>
    <li><LinkTo @route="scenarios.performance">Performance</LinkTo></li>
    <li><LinkTo @route="scenarios.blank">Blank</LinkTo></li>
  </ul>

  {{outlet}}
</template>
