'use client'

import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { TabItem } from './tab-item'

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <RadixScrollArea.Root className="w-full" type="scroll">
        <RadixScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value="tab1"
              title="My details"
              isSelected={activeTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={activeTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={activeTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={activeTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={activeTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={activeTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={activeTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={activeTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={activeTab === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={activeTab === 'tab10'}
            />
          </Tabs.List>
        </RadixScrollArea.Viewport>

        <RadixScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <RadixScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </RadixScrollArea.Scrollbar>
      </RadixScrollArea.Root>
    </Tabs.Root>
  )
}
