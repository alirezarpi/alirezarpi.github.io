// TODO - Add soft skills as separate section

const skills = [
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Container Orchestration', 'Infrastructure'],
  },
  {
    title: 'Nomad',
    competency: 4,
    category: ['Container Orchestration', 'Infrastructure'],
  },
  {
    title: 'Docker Swarm',
    competency: 2,
    category: ['Container Orchestration'],
  },
  {
    title: 'Shell Script',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Django',
    competency: 5,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Ansible',
    competency: 3,
    category: ['IaC', 'Tools'],
  },
  {
    title: 'Terraform',
    competency: 4,
    category: ['IaC', 'Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Gitlab-CI',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Github Action',
    competency: 3,
    category: ['CI/CD'],
  },
  {
    title: 'ELK Stack',
    competency: 2,
    category: ['Monitoring'],
  },
  {
    title: 'Prometheus Stack',
    competency: 3,
    category: ['Monitoring'],
  },
  {
    title: 'Nginx',
    competency: 3,
    category: ['Load Balancer'],
  },
  {
    title: 'HAProxy',
    competency: 4,
    category: ['Load Balancer'],
  },
  {
    title: 'Fabio',
    competency: 3,
    category: ['Load Balancer'],
  },
  {
    title: 'Consul',
    competency: 3,
    category: ['Load Balancer'],
  },
  {
    title: 'Vagrant',
    competency: 4,
    category: ['Development Automation', 'Tools'],
  },
  {
    title: 'Waypoint',
    competency: 4,
    category: ['Development Automation', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
