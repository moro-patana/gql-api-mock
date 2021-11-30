import { gql, useQuery } from '@apollo/client'
const GET_LAUNCHESPAST = gql`
  query LaunchesPast {
    launchesPast(limit: 2) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`

const gqlVariables = {
  limit: 2,
}
const Home = () => {
  const { data } = useQuery(GET_LAUNCHESPAST, {
    variables: gqlVariables,
  })

  console.log(data)
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-red-600'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 bg-red-700 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Mission Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Date
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Site Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.launchesPast.map((launch, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {launch.mission_name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {new Date(launch.launch_date_local).toDateString()}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-red-500'>
                        {launch.launch_site.site_name_long}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
