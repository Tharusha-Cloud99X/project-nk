import { useState } from 'react'
import Input from '@/components/ui/Input'
import { HiOutlineSearch } from 'react-icons/hi'

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState('')
    return (
        <Input
            className="max-w-md md:w-52 md:mb-0 mb-4 items-center"
            size="sm"
            placeholder="Search by id/name"
            prefix={<HiOutlineSearch className="text-lg" />}
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
        />
    )
}

export default Searchbar
