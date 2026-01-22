import TextPressure from './TextPressure';

const Footer = () => {
    return (
        <div 
            className="w-full h-[12dvh] md:h-[50dvh] text-white flex items-center justify-center relative bg-[#2D2A32] overflow-hidden"
        >
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-0">
                <TextPressure
                    text="BALALALA!"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={false}
                    textColor="#EFF0EF10"
                    minFontSize={24}
                />
            </div>
        </div>
    )
}

export default Footer