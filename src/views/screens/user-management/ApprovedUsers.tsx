
import { ColumnDef, DataTable, DataTableResetHandle } from '@/components/shared'
import UserTableTools from './components/UserTableTools'
import { useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'

const CollapseMenuItemView2 = () => {

    type User = {
        id: string
        name: string
        email: string
        address: string
        location: string
        contact: string
        userType: string
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
                <Button>Block</Button>
                <Button variant={'twoTone'}>Change Password</Button>
                <Button variant={'solid'}>Approved</Button>
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
                header: 'Name',
                id: 'name',
                //accessorKey: 'name',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.name}</span>
                },
                sortable: false,
            },
            {
                header: 'Email',
                id: 'email',
                //accessorKey: 'email',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.email}</span>
                },
            },
            {
                header: 'Address',
                id: 'address',
                //accessorKey: 'address',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.address}</span>
                },
            },
            {
                header: 'Location',
                id: 'location',
                //accessorKey: 'location',
                cell: (props) => {
                    const row = props.row.original
                    return <span className={``}>{row.location}</span>
                },
            },
            {
                header: 'Contact No',
                id: 'contact',
                //accessorKey: 'contact',
                cell: (props) => {
                    const { contact } = props.row.original
                    return <span>{contact}</span>
                },
            },
            {
                header: 'Type of User',
                id: 'userType',
                //accessorKey: 'userType',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="font-bold">{row.userType}</span>
                },
            },
            {
                header: 'Options',
                id: 'options',
                cell: (props) => <ActionColumn row={props.row.original} />,
            },
        ],
        [],
    )

    const tableRef = useRef<DataTableResetHandle>(null)

    const data: User[] = [
        {
            id: '1',
            name: 'Sihar',
            email: 'Sihar@gmail.com',
            address: '123,tokyo',
            location: 'tokyo',
            contact: '12345678',
            userType: 'Individual Seller',
        },
        {
            id: '2',
            name: 'Sihar',
            email: 'Sihar@gmail.com',
            address: '123,tokyo',
            location: 'tokyo',
            contact: '12345678',
            userType: 'Dealer',
        },
        {
            id: '3',
            name: 'Sihar',
            email: 'Sihar@gmail.com',
            address: '123,tokyo',
            location: 'tokyo',
            contact: '12345678',
            userType: 'Other Companies',
        },
        {
            id: '4',
            name: 'Sihar',
            email: 'Sihar@gmail.com',
            address: '123,tokyo',
            location: 'tokyo',
            contact: '12345678',
            userType: 'New Autoparts Agent',
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

export default CollapseMenuItemView2
