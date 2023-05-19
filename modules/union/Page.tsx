import { Container } from '@/components/Container'
import { JobTable } from '@/layout/JobTable'
import { Card } from '@geist-ui/core'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

function Page() {
  return (
    <Container>
      <JobTable/>
    </Container>
  )
}

export default Page