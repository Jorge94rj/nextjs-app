import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const EventsPage = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      alert(
        `routeChangeStart called App is changing to ${url} ${shallow ? 'with' : 'without'
        } shallow routing`
      )
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        alert(`Route to ${url} was cancelled!`)
      }
    }

    router.events.on('routeChangeError', handleRouteChangeError)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3>Router events</h3>
      <ul>
        <li>
          {'routeChangeStart(url, {shallow})'} - Fires when a route starts to change
        </li>
        <li>
          {'routeChangeComplete(url, {shallow})'} - Fires when a route changed completely
        </li>
        <li>
          {'routeChangeError(err, url, {shallow})'} - Fires when there&apos;s an error when changing routes, or a route load is cancelled
        </li>
        <li>
          {'beforeHistoryChange(url, {shallow})'} - Fires before changing the browser&apos;s history
        </li>
        <li>
          {'hashChangeStart(url, {shallow})'} - Fires when the hash will change but not the page
        </li>
        <li>
          {'hashChangeComplete(url, {shallow})'} - Fires when the hash has changed but not the page
        </li>
      </ul>
    </>
  )
}

export default EventsPage
