const fontFamily = [
	{ label: 'Primary (Cora)', value: 'primary', class: 'font-cora' },
	{ label: 'Secondary (Gotham)', value: 'secondary', class: 'font-gotham' },
]

const width = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Auto', value: 'auto', class: 'w-auto' },
	{ label: 'Padded', value: 'padded', class: 'w-padded' },
	{ label: 'Full', value: 'full', class: 'w-full' },
	{ label: '80%', value: '80%', class: 'w-4/5' },
	{ label: '60%', value: '60%', class: 'w-3/5' },
	{ label: '50%', value: '50%', class: 'w-1/2' },
	{ label: '40%', value: '40%', class: 'w-2/5' },
	{ label: '20%', value: '20%', class: 'w-1/5' }
]

const height = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Auto', value: 'auto', class: 'h-auto' },
	{ label: 'Full', value: 'full', class: 'h-full' },
	{ label: '100vh', value: 'screen', class: 'h-screen' },
	{ label: '80vh', value: '80vh', class: 'h-80vh' },
	{ label: '60vh', value: '60vh', class: 'h-60vh' },
	{ label: '50vh', value: '50vh', class: 'h-50vh' },
	{ label: '40vh', value: '40vh', class: 'h-40vh' },
	{ label: '20vh', value: '20vh', class: 'h-20vh' }
]

const padding = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '2', value: '2', class: 'p-2' },
	{ label: '4', value: '4', class: 'p-4' },
	{ label: '6', value: '6', class: 'p-6' },
	{ label: '8', value: '8', class: 'p-8' },
	{ label: '12', value: '12', class: 'p-8 md:p-12' },
	{ label: '16', value: '16', class: 'p-10 md:p-16' }
]

const paddingTop = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '2', value: '2', class: 'pt-2' },
	{ label: '3', value: '3', class: 'pt-3' },
	{ label: '4', value: '4', class: 'pt-4' },
	{ label: '6', value: '6', class: 'pt-6' },
	{ label: '8', value: '8', class: 'pt-8' },
	{ label: '12', value: '12', class: 'pt-8 md:pt-12' },
	{ label: '16', value: '16', class: 'pt-10 md:pt-16' },
	{ label: '32', value: '32', class: 'pt-20 md:pt-32' }
]

const paddingBottom = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '2', value: '2', class: 'pb-2' },
	{ label: '3', value: '3', class: 'pb-3' },
	{ label: '4', value: '4', class: 'pb-4' },
	{ label: '6', value: '6', class: 'pb-6' },
	{ label: '8', value: '8', class: 'pb-8' },
	{ label: '12', value: '12', class: 'pb-8 md:pb-12' },
	{ label: '16', value: '16', class: 'pb-10 md:pb-16' },
	{ label: '32', value: '32', class: 'pb-20 md:pb-32' }
]

const marginTop = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '2', value: '2', class: 'mt-2' },
	{ label: '3', value: '3', class: 'mt-3' },
	{ label: '4', value: '4', class: 'mt-4' },
	{ label: '6', value: '6', class: 'mt-6' },
	{ label: '8', value: '8', class: 'mt-8' },
	{ label: '12', value: '12', class: 'mt-8 md:mt-12' },
	{ label: '16', value: '16', class: 'mt-10 md:mt-16' },
	{ label: '32', value: '32', class: 'mt-20 md:mt-32' }
]

const marginBottom = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '2', value: '2', class: 'mb-2' },
	{ label: '3', value: '3', class: 'mb-3' },
	{ label: '4', value: '4', class: 'mb-4' },
	{ label: '6', value: '6', class: 'mb-6' },
	{ label: '8', value: '8', class: 'mb-8' },
	{ label: '12', value: '12', class: 'mb-8 md:mb-12' },
	{ label: '16', value: '16', class: 'mb-10 md:mb-16' },
	{ label: '32', value: '32', class: 'mb-20 md:mb-32' }
]

const textColor = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Black', value: 'black', class: 'text-black' },
	{ label: 'White', value: 'white', class: 'text-white' },
	{ label: 'Light Grey', value: 'light-grey', class: 'text-light-grey' },
	{ label: 'Extra Light Grey', value: 'extra-light-grey', class: 'text-extra-light-grey' },
	{ label: 'Blue', value: 'blue', class: 'text-blue' },
]

const textSize = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Small', value: 'sm', class: 'text-sm' }, /* text-xs md:text-sm */
	{ label: 'Base', value: 'base', class: 'text-base' }, /* text-sm md:text-base */
	{ label: 'Large', value: 'large', class: 'text-lg' }, /* text-base md:text-lg */
	{ label: 'Extra Large', value: 'xl', class: 'text-xl' }, /* text-lg md:text-xl */
	{ label: '2XL', value: '2xl', class: 'text-xl md:text-2xl' }, /* text-xl md:text-2xl */
	{ label: '3XL', value: '3xl', class: 'text-2xl md:text-3xl' }, /* text-2xl md:text-3xl */
	{ label: '4XL', value: '4xl', class: 'text-3xl md:text-4xl' }, /* text-3xl md:text-4xl */
	{ label: '5XL', value: '5xl', class: 'text-4xl md:text-5xl' }, /* text-4xl md:text-5xl */
	{ label: '6XL', value: '6xl', class: 'text-4xl md:text-6xl' }, /* text-4xl md:text-5xl */
]

const textWeight = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Light', value: 'light', class: 'font-light' },
	{ label: 'Normal', value: 'normal', class: 'font-normal' },
	{ label: 'Medium', value: 'medium', class: 'font-medium' },
	{ label: 'Bold', value: 'bold', class: 'font-bold' }
]

const textAlign = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Center', value: 'center', class: 'text-center' },
	{ label: 'Left', value: 'left', class: 'text-left' },
	{ label: 'Right', value: 'right', class: 'text-right' }
]

const backgroundColor = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Transparent', value: 'transparent', class: 'bg-transparent' },
	{ label: 'White', value: 'white', class: 'bg-white' },
	{ label: 'Light Grey', value: 'light-grey', class: 'bg-light-grey' },
	{ label: 'Extra Light Blue', value: 'extra-light-blue', class: 'bg-blue-10' },
	{ label: 'Blue', value: 'blue', class: 'bg-blue' },
	{ label: 'Gold', value: 'gold', class: 'bg-gold' },
	{ label: 'Light Gold', value: 'light-gold', class: 'bg-gold-40' },
	{ label: 'Horizontal Gradient', value: 'horizontal-gradient', class: 'horizontal-gradient' },
	{ label: 'Vertical Gradient', value: 'vertical-gradient', class: 'vertical-gradient' }
]

const borderColor = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Transparent', value: 'transparent', class: 'border-transparent' },
	{ label: 'Light Grey', value: 'light-grey', class: 'border-light-grey' },
	{ label: 'Extra Light Grey', value: 'extra-light-grey', class: 'border-extra-light-grey' },
	{ label: 'Blue', value: 'primary', class: 'border-blue' },
	{ label: 'Gold', value: 'secondary', class: 'border-gold-60' }
]

const borderWidth = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '1px', value: '1', class: 'border' },
	{ label: '2px', value: '2', class: 'border-2' },
	{ label: '3px', value: '3', class: 'border-3' },
	{ label: '4px', value: '4', class: 'border-4' }
]

const borderRadius = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Extra Small', value: 'xs', class: 'rounded-sm' },
	{ label: 'Small', value: 'sm', class: 'rounded' },
	{ label: 'Medium', value: 'md', class: 'rounded-md' },
	{ label: 'Large', value: 'lg', class: 'rounded-lg' },
	{ label: 'Extra Large', value: 'xl', class: 'rounded-xl' },
	{ label: '2XL', value: '2xl', class: 'rounded-2xl' },
	{ label: '3XL', value: '3xl', class: 'rounded-3xl' },
	{ label: 'Full', value: 'full', class: 'rounded-full' },
]

const lineSpacing = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Default', value: 'default', class: 'leading-none' },
	{ label: 'Tight (1.25)', value: 'tight', class: 'leading-tight' },
	{ label: 'Normal (1.5)', value: 'normal', class: 'leading-normal' },
	{ label: 'Loose (2.0)', value: 'loose', class: 'leading-loose' },
]

const alignItems = [
	{ label: 'Start', value: 'start', class: 'items-start' },
	{ label: 'End', value: 'end', class: 'items-end' },
	{ label: 'Center', value: 'center', class: 'items-center' },
	{ label: 'Stretch', value: 'baseline', class: 'items-baseline' },
	{ label: 'Baseline', value: 'stretch', class: 'items-stretch' },
]

const justifyContent = [
	{ label: 'Start', value: 'start', class: 'justify-start' },
	{ label: 'End', value: 'end', class: 'justify-end' },
	{ label: 'Center', value: 'center', class: 'justify-center' },
	{ label: 'Between', value: 'between', class: 'justify-between' },
	{ label: 'Around', value: 'around', class: 'justify-around' },
]

const maxWidth = [
	{ label: 'None', value: 'none', class: '' },
	{ label: 'Full', value: 'full', class: 'max-w-full' },
	{ label: 'Small', value: 'sm', class: 'max-w-full md:max-w-screen-sm' },
	{ label: 'Medium', value: 'md', class: 'max-w-full md:max-w-screen-md' },
	{ label: 'Large', value: 'lg', class: 'max-w-full md:max-w-screen-lg' },
	{ label: 'Extra Large', value: 'xl', class: 'max-w-full md:max-w-screen-xl' },
	{ label: '2XL', value: '2xl', class: 'max-w-full md:max-w-screen-2xl' },
]

const verticalSpaceBetween = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '2', value: '2', class: 'space-y-2' },
	{ label: '4', value: '4', class: 'space-y-4' },
	{ label: '6', value: '6', class: 'space-y-6' },
	{ label: '8', value: '8', class: 'space-y-8' }
]

const gridRows = [
	{ label: '1', value: '1', class: 'grid-rows-1' },
	{ label: '2', value: '2', class: 'grid-rows-1 md:grid-rows-2' },
	{ label: '3', value: '3', class: 'grid-rows-1 md:grid-rows-2 lg:grid-rows-3' },
	{ label: '4', value: '4', class: 'grid-rows-1 md:grid-rows-2 lg:grid-rows-4' },
]

const gridColumns = [
	{ label: '1', value: '1', class: 'grid-cols-1' },
	{ label: '2', value: '2', class: 'grid-cols-2' }, /*grid-cols-1 md:grid-cols-2*/
	{ label: '3', value: '3', class: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
	{ label: '4', value: '4', class: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' },
]

const gap = [
	{ label: 'None', value: 'none', class: '' },
	{ label: '1', value: '1', class: 'gap-1' },
	{ label: '2', value: '2', class: 'gap-2' },
	{ label: '4', value: '4', class: 'gap-4' },
	{ label: '6', value: '6', class: 'gap-6' },
	{ label: '8', value: '8', class: 'gap-8' }
]

module.exports = {
	fontFamily,
	width,
	height,
	padding,
	paddingTop,
	paddingBottom,
	marginTop,
	marginBottom,
	textColor,
	textSize,
	textWeight,
	textAlign,
	backgroundColor,
	borderColor,
	borderWidth,
	borderRadius,
	lineSpacing,
	alignItems,
	justifyContent,
	maxWidth,
	verticalSpaceBetween,
	gridRows,
	gridColumns,
	gap
}
