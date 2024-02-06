import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { activityList } from '@/pages/api/activityList'

const Activity = () => {
    const [selectedActivity, setSelectedActivity] = useState<{ id: number; name: string; description: string; } | null>(null);

    // Function to select a random activity
    const selectRandomActivity = () => {
        const randomIndex = Math.floor(Math.random() * activityList.length);
        setSelectedActivity(activityList[randomIndex]);
    }

    return (
        <Layout>
            <div className='flex-col lg:flex-row flex gap-12'>
                <div>
                    <button
                        onClick={selectRandomActivity}
                        className='bg-emerald-300 hover:bg-emerald-400 p-4 rounded-lg mt-12'
                    >
                        Select a random activity
                    </button>
                    {/* Display the selected activity, if any */}
                    {selectedActivity && (
                        <div className='mt-4 bg-[#323232] rounded-xl p-4'>
                            <h2 className='text-3xl'>{selectedActivity.name}</h2>
                        </div>
                    )}
                </div>
                <div className='text-left'>
                    {activityList.map((activity) => (
                        <div key={activity.id} className='bg-[#323232] p-6 rounded-2xl'>
                            <h2 className='text-3xl'>{activity.name}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </Layout>
    )
}

export default Activity;
