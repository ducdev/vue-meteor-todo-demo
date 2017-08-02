<template>
  <div>
    <h1>Proposals</h1>
    <input v-model.trim="proposal" placeholder="Proposal title">
    <button @click="addProposal">Click</button>
    <ul>
      <li v-for="proposal in proposals">
        {{ proposal.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { Proposals } from '/imports/api/schemas/Proposals'
  export default {
    meteor: {
     $subscribe: {
       'proposals': []
     },
     proposals () {
       return Proposals.find();
     },
    },
    data: () => ({
      proposal: '',
    }),
    methods: {
      addProposal() {
        Meteor.call('addProposal', this.proposal)
      }
    }
  }
</script>
