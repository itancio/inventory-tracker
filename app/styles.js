const MainBox = {
    className: 'primary',
    width : '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 16,
    gap: 2,
}

const BoxBorder = {
    className: 'border',
    border: '1px solid #e0e0e0',
    borderRadius: 2,
    padding: 1,
    boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)'
}

const ListBox = {
    className: 'list',
    width: '600px',
    height: '500px', 
    spacing: 1,
    overflow: 'auto'
}

const ItemBox = {
    className: 'itemBox',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 1,
}

const Item = {
    className: 'item',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 2,
    borderRadius: 2,
}

const Quantity = {
    direction: 'row', 
    spacing: 4,
}

const SearchBox = {
    id: 'outlined-basic',
    label: 'search items',
    variant: 'outlined',
    margin: 'normal',
}

export { BoxBorder, 
         MainBox, 
         ListBox, 
         Item,
         Quantity,
         ItemBox,
         SearchBox,
        }