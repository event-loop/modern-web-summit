import React from 'react'

const SpeakerFilter = (props: SpeakerFilterProps) => {
  const { filterList, onClick } = props
  return (
    <div className="flex lg:flex-wrap overflow-auto lg:ml-5">
      {filterList.map((item: FilterListProps, index) => {
        const { image, title, selected, id } = item
        return (
          <FilterItem
            key={index}
            image={image}
            title={title}
            selected={selected}
            onClick={() => onClick(id)}
          />
        )
      })}
    </div>
  )
}

const FilterItem = (props: FilterItemProps) => {
  const { image, title, selected, onClick } = props
  return (
    <div
      className={`sm:flex-70 lg:flex-auto whitespace-no-wrap sm:mr-3 lg:mr-0 lg:mb-3 lg:w-full flex p-3 rounded cursor-pointer ${selected ? 'bg-black' : 'bg-gray-600 hover:bg-gray-700'}`}
      onClick={onClick}
    >
      <img src={image} className="h-5 mr-3" />
      <p className="pr-2 text-1-2 text-white uppercase sm:font-medium lg:font-extrabold leading-5 ">{title}</p>
    </div>
  )
}

type FilterListProps = {
  image: string,
  title: string,
  selected: boolean,
  id: number
}

type SpeakerFilterProps = {
  filterList: Array<FilterListProps>,
  onClick: any
}

type FilterItemProps = {
  image: string,
  title: string,
  selected: boolean,
  onClick: any
}

export default SpeakerFilter
