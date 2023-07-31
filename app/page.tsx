'use client'
import Image from 'next/image'
import { Command } from "@tauri-apps/api/shell"
import { createPublicClient, http, PublicClient } from "viem"
import { foundry } from "viem/chains"
import { useEffect, useState } from 'react'

export default function Home() {
  const [client, setClient] = useState<PublicClient>()


  const anvilCommand = new Command('run-anvil')
  const launchAnvil = async () => {
    const output = await anvilCommand.execute();
    console.log(output)
    // const anvilClient = createPublicClient({
    //   chain: foundry,
    //   transport: http(),
    //   pollingInterval: 5_000,
    // })
    // setClient(anvilClient)
  }

  // useEffect(() => {
  //   if (client) {
  //     client.getBlockNumber().then(blockNumber => {
  //       console.log(blockNumber)
  //     })
  //   }
  // }, [client])



  return (
    <main className="flex min-h-screen flex-col items-center gap-y-24 p-24">
      <div className="z-10 w-full max-w-5xl">
        <div className='flex flex-col items-center gap-y-4'>
          <Image
            src="/furnace-icon.png"
            alt="Next.js Logo"
            width={110}
            height={110}
            priority
            unoptimized
          />
          <p className="top-0 flex w-full justify-center text-5xl" style={{ fontFamily: "Minecraft" }}>
            Furnace
          </p>
        </div>
      </div>


      <div className='flex flex-col items-center gap-y-4'>
        <p className={`m-0 text-sm opacity-50`}>
          The place to cook the future of France.
        </p>
        <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left gap-x-24">

          <button
            className="text-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            onClick={launchAnvil}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Launch{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Deploy a local network and start building.
            </p>
          </button>

          <button
            className="text-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Configure{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Furnace playground and configure your local network.
            </p>
          </button>

        </div>
      </div>

    </main >
  )
}
