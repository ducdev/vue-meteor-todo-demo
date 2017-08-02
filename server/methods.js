import { Proposals } from '/imports/api/schemas/Proposals'

Meteor.methods({
  addProposal(text) {
    Proposals.insert({ title: text })
  }
})
