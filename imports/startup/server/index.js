import { Proposals } from '../../api/schemas/Proposals';

if (!Proposals.findOne()) {
  const proposals = [
    {
      title: 'Proposal 1',
    },
    {
      title: 'Proposal 2',
    },
    {
      title: 'Proposal 3',
    },
  ];
  console.log('Seeding proposals');
  proposals.forEach(proposal => {
    Proposals.insert(proposal);
  })
}
