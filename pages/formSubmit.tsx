import React, { FormEvent, useState, Fragment } from 'react'
import { useMutation, gql } from '@apollo/client'

export const ADD_LAUNCH = gql`
  mutation CreateLaunch(
    $mission_name: String
    $launch_date_local: String
    $site_name_long: String
  ) {
    createLaunch(
      mission_name: $mission_name
      launch_date_local: $launch_date_local
      launch_site: { site_name_long: $site_name_long }
    ) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`

const CreateLaunch = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void
}) => {
  const [formState, setFormState] = useState({
    mission_name: '',
    launch_date_local: '',
    launch_site: { site_name_long: '' },
  })
  const [createLaunchData] = useMutation(ADD_LAUNCH, {
    variables: {
      mission_name: formState.mission_name,
      launch_date_local: formState.launch_date_local,
      launch_site: formState.launch_site.site_name_long,
    },
  })
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    createLaunchData()
    setOpenModal(false)
    console.log(formState)
  }
  return (
    <div
      className='fixed inset-0 z-10 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75'
          aria-hidden='true'></div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'>
          &#8203;
        </span>
        <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-4 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
          <h4 className='p-4 text-center text-gray-500'>Create a new launch</h4>
          <form className='flex flex-col gap-6 p-4 m-2' onSubmit={handleSubmit}>
            <div className='border-b border-gray-500 border-solid input-field'>
              <input
                required
                className='p-0 text-sm border-none focus:ring-0 focus:bg-white'
                type='text'
                id='mission_name'
                placeholder='Mission name'
                value={formState.mission_name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    mission_name: e.target.value,
                  })
                }
              />
            </div>
            <div className='border-b border-gray-500 border-solid input-field'>
              <input
                required
                className='p-0 text-sm border-none focus:ring-0 focus:bg-white'
                type='text'
                id='launch_date_local'
                placeholder='Launch Date Local'
                value={formState.launch_date_local}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    launch_date_local: e.target.value,
                  })
                }
              />
            </div>
            <div className='border-b border-gray-500 border-solid input-field'>
              <input
                required
                className='p-0 text-sm border-none focus:ring-0 focus:bg-white'
                type='text'
                id='site long name'
                placeholder='Site Long Name'
                value={formState.launch_site.site_name_long}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    launch_site: {
                      site_name_long: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className='flex flex-row justify-end gap-6 p-4'>
              <button
                onClick={() => setOpenModal(false)}
                className='px-4 py-2 text-white bg-indigo-600 border-none rounded-md bg-tradewind focus:outline-none focus:ring-0'>
                Close
              </button>
              <button
                type='submit'
                className='px-4 py-2 text-white bg-indigo-600 border-none rounded-md bg-tradewind focus:outline-none focus:ring-0'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default CreateLaunch
