import { ColumnDef, DataTable, DataTableResetHandle } from '@/components/shared'
import UserTableTools from './components/UserTableTools'
import { useMemo, useRef } from 'react'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import { FiPackage } from 'react-icons/fi'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'

const ApprovedProducts = () => {
    type User = {
        id: string
        refID: string
        make: string
        model: string
        type: string
        mnfYear: string
        sellingCategory: string
        sellingType: string
    }

    const ActionColumn = ({ row }: { row: User }) => {
        const navigate = useNavigate()

        const onEdit = () => {
            //navigate(`/app/sales/product-edit/${row.id}`)
        }

        const onDelete = () => {
            //dispatch(toggleDeleteConfirmation(true))
            //dispatch(setSelectedProduct(row.id))
        }

        return (
            <div className="flex gap-2">
                {/* <Button>Delete</Button> */}
                <Button variant={'solid'}>Listing</Button>
                <Button variant={'twoTone'}>Delete</Button>
            </div>
        )
    }

    const columns: ColumnDef<User>[] = useMemo(
        () => [
            {
                header: 'User ID',
                id: 'id',
                //accessorKey: 'id',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.id}</span>
                },
            },
            {
                header: 'NK-REF ID',
                id: 'refID',
                //accessorKey: 'name',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.refID}</span>
                },
                sortable: false,
            },
            {
                header: 'Make',
                id: 'make',
                //accessorKey: 'email',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.make}</span>
                },
            },
            {
                header: 'Model',
                id: 'model',
                //accessorKey: 'address',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.model}</span>
                },
            },
            {
                header: 'Type',
                id: 'type',
                //accessorKey: 'location',
                cell: (props) => {
                    const row = props.row.original
                    return <span className={``}>{row.type}</span>
                },
            },
            {
                header: 'Mnf Year',
                id: 'mnfyear',
                //accessorKey: 'contact',
                cell: (props) => {
                    const { mnfYear } = props.row.original
                    return <span>{mnfYear}</span>
                },
            },
            {
                header: 'Selling Category',
                id: 'sellingCategory',
                //accessorKey: 'userType',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="font-bold">{row.sellingCategory}</span>
                },
            },
            {
                header: 'Selling Type',
                id: 'sellingType',
                //accessorKey: 'userType',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="font-bold">{row.sellingType}</span>
                },
            },
            {
                header: 'Option',
                id: 'option',
                cell: (props) => <ActionColumn row={props.row.original} />,
            },
        ],
        [],
    )

    const tableRef = useRef<DataTableResetHandle>(null)

    const data: User[] = [
        {
            id: '1',
            refID: 'NK-1',
            make: 'Nissan',
            model: 'XTrail',
            type: 'Suv',
            mnfYear: '2017',
            sellingCategory: 'vehicle',
            sellingType: 'Price Sale'
        },
        {
            id: '2',
            refID: 'NK-2',
            make: 'Caterpillar 030ESR',
            model: '030ESR',
            type: 'Suv',
            mnfYear: '2015',
            sellingCategory: 'equipment',
            sellingType: 'Tender'
        },
        {
            id: '3',
            refID: 'NK-3',
            make: 'Sienta',
            model: '030ESR',
            type: '-',
            mnfYear: '2015',
            sellingCategory: 'Used Autoparts',
            sellingType: 'Price Sale'
        },
    ]

    return (
        <div className="space-y-8">
            <UserTableTools />
            <DataTable
                ref={tableRef}
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
                ///loading={loading}
                // pagingData={{
                //     total: tableData.total as number,
                //     pageIndex: tableData.pageIndex as number,
                //     pageSize: tableData.pageSize as number,
                // }}
                //onPaginationChange={onPaginationChange}
                // onSelectChange={onSelectChange}
                //onSort={onSort}
            />
        </div>
    )
}

export default ApprovedProducts


