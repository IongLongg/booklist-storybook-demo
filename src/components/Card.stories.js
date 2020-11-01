import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap'

export default {
    title : 'Card'
}

const BookCard = ({title, cover, description}) => (
    <Card style={{width:'318px', marginBottom:'20px'}}>
        <CardImg top src={cover} alt='cover'/>
        <CardBody>
            <CardTitle><h5>{title}</h5></CardTitle>
            <CardText>{description}</CardText>
            <Button outline color='success'>Add to cart</Button>
        </CardBody>
    </Card>
)

BookCard.defaultProps = {
    title : 'Đắc Nhân Tâm',
    cover : 'http://res.cloudinary.com/dms6sf3zr/image/upload/v1602817940/p4ouvaaf64gz6ndvgczp.jpg',
    description : 'Hay'
}

export const Book = () => <BookCard/>

const ShopCard = ({name, phone, email, logo}) => (
    <Card style={{width:'500px'}}>
        <CardImg top src={logo} alt='cover'/>
        <CardBody>
            <CardTitle><h5>{name}</h5></CardTitle>
            <CardText>{`Email : ${email}`}</CardText>
            <CardText>{`Phone : ${phone}`}</CardText>
        </CardBody>
    </Card>
)

ShopCard.defaultProps = {
    name : 'Vinmart',
    logo : 'http://res.cloudinary.com/dms6sf3zr/image/upload/v1602818585/zqh4az6pltf0devgbq5z.jpg',
    phone : '0222222222',
    email : 'namlong9012@gmail.com'
}

export const Shop = () => <ShopCard/>