const AnnouncementBar = ({ mysteries, resetSwiper }) => {
    return (
        <div className="w-full bg-slate-500 text-center p-3 mb-3 flex items-center justify-center gap-4">
            <p className="text-white">Today's mysteries are the {mysteries} mysteries.</p>
            <button
                onClick={resetSwiper}
                className='bg-slate-700 hover:bg-slate-600 py-2 px-4 rounded-md text-white transition-colors'
            >
                Return to Today's Mystery
            </button>
        </div>
    )
}

export default AnnouncementBar
