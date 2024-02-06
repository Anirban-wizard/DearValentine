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
                        className='bg-[#FCA5A5] hover:bg-[#F87171] p-4 rounded-lg mt-12 animate-bounceOnce'
                    >
                        Select a random activity
                    </button>
                    {/* Display the selected activity, if any */}
                    {selectedActivity && (
                        <div className='mt-4 bg-love rounded-xl p-4'>
                            <h2 className='text-3xl'>{selectedActivity.name}</h2>
                        </div>
                    )}
                </div>
                <div className='text-left'>
                    {activityList.map((activity) => (
                        <div key={activity.id} className='bg-love p-4 rounded-2xl'>
                            <h2 className='text-3xl'>{activity.name}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </Layout>
    )
}

export default Activity;
