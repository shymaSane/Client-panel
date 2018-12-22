import React from 'react'

export default function Spinner() {
  return (
    <svg 
        width="150px"  height="150px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-flickr" style={{background: 'none'}}>
        <circle ng-attr-cx="{{config.cx1}}" cy="50" ng-attr-fill="{{config.c1}}" ng-attr-r="{{config.radius}}" cx="37.9757" fill="#ffc107" r="20">
        <animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur="1" begin="-0.5s" repeatCount="indefinite"></animate>
        </circle>
        <circle ng-attr-cx="{{config.cx2}}" cy="50" ng-attr-fill="{{config.c2}}" ng-attr-r="{{config.radius}}" cx="62.0243" fill="#000000" r="20">
        <animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur="1" begin="0s" repeatCount="indefinite">
        </animate>
        </circle>
        <circle ng-attr-cx="{{config.cx1}}" cy="50" ng-attr-fill="{{config.c1}}" ng-attr-r="{{config.radius}}" cx="37.9757" fill="#ffc107" r="20">
        <animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur="1" begin="-0.5s" repeatCount="indefinite"></animate>
        <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" ng-attr-dur="{{config.speed}}s" repeatCount="indefinite" dur="1s">
        </animate>
        </circle>
    </svg>
  )
}
