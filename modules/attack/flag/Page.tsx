import { Card } from '@geist-ui/core'
import { current } from '@reduxjs/toolkit'
import classNames from 'classnames'
import React from 'react'
import YouTube from 'react-youtube'

export const FlagPage= ()=> {
  return (
    <div className={classNames(
      'h-screen',
      'mt-12',
    )}>
      <Card>
        <p className={classNames(
          'text-xs',

          'py-2',
        )}>🎉 <i className='font-bold underline decoration-red-400'>디붕fan</i>의 야래그 매드무비입니다.</p>
      </Card>
          {/* 영상 */}
      <div className={classNames(
        'w-full',
        'h-96',
        'max-h-fit',

        'my-12',
      )}
      >
        <p className={classNames(
          'text-lg',
          'font-bold',
        )}>석양의 설원</p>
          <YouTube
            videoId="Fdvw0eS27nk"
            className={classNames(
              'w-1/2',
              'h-full',

              'mx-auto',
              'mt-24',

              'max-sm:w-full',
              'max-sm:h-1/2',
            )}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
              },
            }}

            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
      </div>
    </div>
  )
}

export default FlagPage