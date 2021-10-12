import React from 'react'

type ValidDimensionType = 
               | '12' | '16'| '18' | '24' | '32' | '36' 
               | '48' | '64' | '72' | '96' | '120' | '240'

interface IconProps {
    height?: ValidDimensionType;
    width?: ValidDimensionType;
    color?: string; 
}

export const ParagraphIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg viewBox={`0 0 ${height} ${width}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"/>
    </svg>
)

export const OrderedListIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" fill={color} />
    </svg>
)

export const UnOrderedListIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svgviewBox={`0 0 ${height} ${width}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"/>
    </svg>
)


export const BoldIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"/>
    </svg>
)

export const ItalicIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"/>
    </svg>
)

export const StrikeIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"/>
    </svg>
)

export const Heading1Icon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"/>
    </svg>
)

export const Heading2Icon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z"/>
    </svg>
)