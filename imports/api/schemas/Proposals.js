import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo'

export const Proposals = new Mongo.Collection('proposals')

const proposalsType = new SimpleSchema({
  title: {
    type: 'String',
  },
})

Proposals.attachSchema(proposalsType)
