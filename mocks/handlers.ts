import { graphql } from 'msw'

interface CreateLaunchesPastMutation {
  launchesPast: {
    mission_name: string
    launch_date_local: string
    launch_site: {
      site_name_long: string
    }
  }
}
interface CreateLaunchesPastMutationVariables {
  mission_name: string
  launch_date_local: string
  launch_site: {
    site_name_long: string
  }
}

export const handlers = [
  graphql.query('LaunchesPast', (req, res, ctx) => {
    return res(
      ctx.data({
        launchesPast: [
          {
            mission_name: 'Cartosat-2 Series Satellite',
            launch_date_local: '2021-10-24T11:31:00-04:00',
            launch_site: {
              site_name_long: 'Jiuquan Satellite Launch Center, China',
            },
          },
          {
            mission_name: 'Mars Orbiter Mission Spacecraft',
            launch_date_local: '2020-10-24T11:31:00-04:00',
            launch_site: {
              site_name_long: 'Tanegashima Space Center, Japan',
            },
          },
        ],
      })
    )
  }),
  graphql.mutation<
    CreateLaunchesPastMutation,
    CreateLaunchesPastMutationVariables
  >('CreateLaunchesPast', (req, res, ctx) => {
    const { mission_name, launch_date_local, launch_site } = req.variables
    return res(
      ctx.data({
        launchesPast: {
          mission_name: 'Satellite',
          launch_date_local: '2021-10-24T11:31:00-04:00',
          launch_site: {
            site_name_long: 'Jiuquan Satellite',
          },
        },
      })
    )
  }),
]
