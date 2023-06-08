import React from 'react';
import { WrenchIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const activities = [
    {
        name: 'Verbouw',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: WrenchIcon,
    },
    {
        name: 'Nieuwbouw',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Onderhoud',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Aardbevingsschade',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Meerjarenonderhoudsplan',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Renovatie',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Restauratie',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Timmerfabriek',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Utiliteitsbouw',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Asbestsanering',
        description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
];

export default function Activities()
{
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Activteiten</h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Aannemersbedrijf Sietsema Bouw is gespecialiseerd in:
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {activities.map((activity) => (
                            <div key={activity.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <activity.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {activity.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{activity.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}