import { graphql } from 'msw'

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
]
