import React from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/sietsema-logo.png';

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Bedrijf', href: '#company' },
    { name: 'Activiteiten', href: '#' },
    { name: 'Projecten', href: '#' },
    { name: 'Video\'s', href: '#' },
    { name: 'Contact', href: '#' },
  ];

export default function Menu()
{
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [headerColor, setHeaderColor] = React.useState("bg-transparant shadow-none");

    const listenScrollEvent = () => {
        window.scrollY > 10
          ? setHeaderColor("bg-white shadow-md")
          : setHeaderColor("bg-transparant shadow-none")
      }
    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <header className={`transition-colors ease-in-out duration-250 fixed inset-x-0 top-0 z-50 ${headerColor}`}>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sietsema Bouw</span>
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="Sietsema Bouw logo"
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>

              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a 
                href="mailto:info@sietsemabouw.nl?subject=Facature"
                className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Nieuw baan <PlusIcon className="h-6 w-6 inline-block" aria-hidden="true" />
            </a>
          </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />

          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Sietsema Bouw</span>

                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt="Sietsema Bouw logo"
                />
              </a>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Sluit menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                    <a 
                        href="mailto:info@sietsemabouw.nl?subject=Facature"
                        className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Nieuw baan <PlusIcon className="h-6 w-6 inline-block" aria-hidden="true" />
                    </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    );
}