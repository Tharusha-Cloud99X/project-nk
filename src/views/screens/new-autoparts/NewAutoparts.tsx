import { useMemo, useRef } from 'react'
import { Button } from '@/components/ui'
import { ColumnDef, DataTable, DataTableResetHandle } from '@/components/shared'
import Searchbar from './components/Searchbar'
import { HiEye } from 'react-icons/hi'

const NewAutoparts = () => {
    type Autoparts = {
        id: string
        marker: string
        model: string
        chassis: string
        year: string
        engine: string
        carCode: string
        condition: string
        details: string
    }

    const ActionColumn = ({ row }: { row: Autoparts }) => {
        //const navigate = useNavigate()

        const onEdit = () => {
            //navigate(`/app/sales/product-edit/${row.id}`)
        }

        const onDelete = () => {
            //dispatch(toggleDeleteConfirmation(true))
            //dispatch(setSelectedProduct(row.id))
        }

        return (
            <div className="flex gap-2">
                <Button
                    variant={'solid'}
                    className="flex items-center gap-2"
                    size="sm"
                >
                    <HiEye />
                    View
                </Button>
            </div>
        )
    }

    const columns: ColumnDef<Autoparts>[] = useMemo(
        () => [
            {
                header: '#',
                id: 'id',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.id}</span>
                },
            },
            {
                header: 'Marker',
                id: 'marker',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.marker}</span>
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
                header: 'Chassis No',
                id: 'chassis',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.chassis}</span>
                },
            },
            {
                header: 'Year',
                id: 'year',
                cell: (props) => {
                    const row = props.row.original
                    return <span className={``}>{row.year}</span>
                },
            },
            {
                header: 'Engine',
                id: 'engine',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.engine}</span>
                },
            },
            {
                header: 'Car Code',
                id: 'carCode',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="">{row.carCode}</span>
                },
            },
            {
                header: 'Condition',
                id: 'condition',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="">{row.condition}</span>
                },
            },
            {
                header: 'Details',
                id: 'details',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="">{row.details}</span>
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

    const data: Autoparts[] = [
        {
            id: '1',
            marker: 'Honda',
            model: 'CRZ',
            chassis: 'CR00445',
            year: '2020',
            engine: '2000CC',
            carCode: 'CR11223',
            condition: 'New',
            details: 'description of the part',
        },
        {
            id: '2',
            marker: 'Minima voluptas anim',
            model: 'Rio',
            chassis: 'CR00445',
            year: '2020',
            engine: '2000CC',
            carCode: 'CR11223',
            condition: 'New',
            details: 'description of the part',
        },
        {
            id: '3',
            marker: 'Proident expedita r',
            model: 'Et recusandae Tempo',
            chassis: 'CR00445',
            year: '2020',
            engine: '2000CC',
            carCode: 'CR11223',
            condition: 'New',
            details: 'description of the part',
        },
        {
            id: '4',
            marker: 'Toyota',
            model: 'Model',
            chassis: 'CR00445',
            year: '2020',
            engine: '2000CC',
            carCode: 'CR11223',
            condition: 'New',
            details: 'description of the part',
        },
        {
            id: '5',
            marker: 'Honda',
            model: 'Model',
            chassis: 'CR00445',
            year: '2020',
            engine: '2000CC',
            carCode: 'CR11223',
            condition: 'New',
            details: 'description of the part',
        },
    ]

    return (
        <div className="space-y-8">
            <Searchbar />
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

export default NewAutoparts
