const AnnouncementBar = ({ mysteries, resetSwiper, activeMysteries }) => {
    const activeButtonClasses = 'bg-red-700 hover:bg-slate-600 py-2 px-4 rounded-md text-white transition-colors'
    const disabledButtonClasses = 'bg-red-700 opacity-50 py-2 px-4 rounded-md text-white transition-colors cursor-not-allowed'
    return (
        <div className="w-full bg-slate-500 text-center p-3 mb-3 flex items-center justify-center gap-4">
            <p className="text-white">Today's mysteries are the <span className="font-bold underline">{mysteries}</span> mysteries.</p>
            <button
                onClick={activeMysteries === mysteries ? undefined : resetSwiper}
                className={activeMysteries === mysteries ? disabledButtonClasses : activeButtonClasses}
            >
                Return to Today's Mystery
            </button>
        </div>
    )
}

export default AnnouncementBar
