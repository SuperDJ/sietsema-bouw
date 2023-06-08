import React from 'react';

const people = [
    {
      name: 'Bertil Sietsema',
      role: 'CEO',
      image: 'https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/298945113_601662658328367_7551658481074274607_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fYNWJtZFVCUAX-IPWmG&_nc_ht=scontent-ams4-1.xx&oh=00_AfBpKEPrUtlvZeFxQV9efqqqcTeCn8TTykN4AY11YCdKkw&oe=64872419'
    },
    {
      name: 'Ria Sietsema',
      role: 'Cofounder',
      image: 'https://media.licdn.com/dms/image/C4D03AQHsy987KcFCdg/profile-displayphoto-shrink_800_800/0/1517841056634?e=2147483647&v=beta&t=ij6MW7ZMnyV-dRMKLW9FHrglWw-BCEQpExKbqlUeQuI'
    }
  ];

  export default function About()
  {
    return (
        <div id="company">
            {/* About us */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Over ons</h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                Aannemers Sietsema bestaat sinds 2004 en is een dynamische onderneming. 
                Het is een middelgroot bedrijf dat zich bezighoudt met uiteenlopende werkzaamheden in de bouw. 
                Het team is sterk in het vertalen van de wensen van de klant naar het eindproduct.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                De afgelopen jaren heeft Aannemersbedrijf Sietsema een gelijkmatige groei doorgemaakt waardoor het mogelijk is om projecten van klein tot groot uit te voeren. 
                De projecten lopen uiteen van een volledige restauratie tot aan het verbouwen van een badkamer. 
                Eén ding staat vast, het luisteren naar de klant en het in de praktijk verwoorden van hun wensen staat centraal.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                Aannemersbedrijf Sietsema is aangesloten bij:

                <ul className="list-disc ml-8 mt-3">
                    <li>Bouwend Nederland</li>
                    <li>Vereniging Checklist Aannemers (VCA)</li>
                    <li>Erkend Leerbedrijf.</li>
                </ul>
                </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ons team</h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                </p>
                </div>

                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 grid-cols-4 sm:gap-y-16 xl:col-span-2">
                {people.map((person) => (
                    <li key={person.name}>
                        <div className="rounded-md bg-gray-100 overflow-hidden drop-shadow-md">
                            <img className="h-auto w-full " src={person.image} alt={person.name} />

                            <div className="p-2">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>

                                <a href="" target="_blank" className="text-gray-800 hover:text-gray-500">LinkedIn</a>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
  }