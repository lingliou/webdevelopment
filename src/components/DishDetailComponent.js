import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div> </div>
            );
        }
    }

    renderComments(comments){
        if(comments!=null){
            return(
                comments.map((comment)=>{
                    return (
                        <div key={comment.id} tag="li">
                        <p> {comment.comment}</p>
                        <p> -- {comment.author}, {comment.date}</p>
                        </div>
                    );
                })
            );
        }
        else{
            return(
                <div> </div>
            );
        }

    }


    render(){

        const selected = this.props.y;
        const card = this.renderDish(selected);

        if(selected!=null){
            const comments = this.renderComments(selected.comments);

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {card}
                </div>
                <div className="col-12 col-md-5 m-1" list>
                <h4> Comments </h4>
                    {comments}
                </div>
            </div>
        );
        }
        else{
            return(
                <div> </div>
            );
        }

        }

}



export default DishDetail;
