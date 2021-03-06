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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
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
    <svg viewBox={`0 0 ${height} ${width}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"/>
    </svg>
)


export const BoldIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"/>
    </svg>
)

export const ItalicIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"/>
    </svg>
)

export const StrikeIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"/>
    </svg>
)

export const Heading1Icon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"/>
    </svg>
)

export const Heading2Icon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z"/>
    </svg>
)

export const CodeIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"/>
    </svg>
)

export const TerminalIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M20 10H4v9h16v-9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v2h2V6H5zm4 0v2h2V6H9zm-4 5h3v5H5v-5z"/>
    </svg>
);

export const MarkPenIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"/>
    </svg>
)

export const DoubleQuoteRIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"/>
    </svg>
)

export const Separator = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox={`0 0 ${height} ${width}`} width={width} height={height}>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"/>
    </svg>
)

export const TextWrapIcon = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z"/>
    </svg>
)

export const EraserIcon = ({ })