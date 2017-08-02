import { Proposals } from '/imports/api/schemas/Proposals'

Meteor.publish('proposals', function proposals() {
  console.log('sub')
  return Proposals.find()
})
