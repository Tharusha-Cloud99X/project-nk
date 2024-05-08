import { useMemo, useRef } from 'react'
import { Button } from '@/components/ui'
import { ColumnDef, DataTable, DataTableResetHandle } from '@/components/shared'
import Searchbar from './components/Searchbar'

const Equipment = () => {
    type Product = {
        id: string
        nkRefId: string
        make: string
        model: string
        type: string
        mnfYear: string
        sellingType: string
    }

    const ActionColumn = ({ row }: { row: Product }) => {
        //const navigate = useNavigate()

        const onEdit = () => {
            //navigate(`/app/sales/product-edit/${row.id}`)
        }

        const onDelete = () => {
            //dispatch(toggleDeleteConfirmation(true))
            //dispatch(setSelectedProduct(row.id))
        }

        return (
            <div className="">
                <Button variant={'solid'} size="sm">
                    Listing
                </Button>
            </div>
        )
    }

    const columns: ColumnDef<Product>[] = useMemo(
        () => [
            {
                header: 'User ID',
                id: 'id',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.id}</span>
                },
            },
            {
                header: 'NK-Ref ID',
                id: 'nkRefId',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.nkRefId}</span>
                },
            },
            {
                header: 'Make',
                id: 'make',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.make}</span>
                },
                sortable: false,
            },
            {
                header: 'Model',
                id: 'model',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.model}</span>
                },
            },
            {
                header: 'Type',
                id: 'type',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.type}</span>
                },
            },
            {
                header: 'Mnf Year',
                id: 'mnfYear',
                cell: (props) => {
                    const row = props.row.original
                    return <span className={``}>{row.mnfYear}</span>
                },
            },
            {
                header: 'Selling Type',
                id: 'sellingType',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.sellingType}</span>
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

    const data: Product[] = [
        {
            id: '1',
            nkRefId: 'NK-1',
            make: 'Nissan',
            model: 'XTrail',
            type: 'SUV',
            mnfYear: '2017',
            sellingType: 'Price Sale',
        },
        {
            id: '2',
            nkRefId: 'NK-2',
            make: 'Nissan',
            model: 'XTrail',
            type: 'SUV',
            mnfYear: '2015',
            sellingType: 'Tender',
        },
        {
            id: '3',
            nkRefId: 'NK-3',
            make: 'Nissan',
            model: 'XTrail',
            type: 'SUV',
            mnfYear: '2015',
            sellingType: 'Price Sale',
        },
    ]

    return (
        <div className="space-y-8">
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <Button>Price Sale</Button>
                    <Button>Tender</Button>
                    <Button>Auction Hall</Button>
                </div>
                <Searchbar />
            </div>
            <DataTable
                ref={tableRef}
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
            />
        </div>
    )
}

export default Equipment
