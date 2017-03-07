import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { /* Button, ButtonGroup, */ DropdownButton, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router'
import Users from 'meteor/nova:users';

const PostsViews = (props, context) => {

  let views = ["hot", "all_news"];
  const adminViews = ["rejected", "scheduled"];

  // let views = ["hot", "main", "top", "best", "all_news"];
  // const adminViews = ["rejected", "scheduled"];

  if (Users.canDo(context.currentUser, "posts.edit.all")) {
    views = views.concat(adminViews);
  }

  const query = _.clone(props.router.location.query);

  return (
    <div className="posts-views">
      <DropdownButton
        bsStyle="default"
        className="views btn-secondary"
        title={context.intl.formatMessage({id: "posts.view"})}
        id="views-dropdown"
      >
        {views.map(view =>
          <LinkContainer key={view} to={{pathname: "/", query: {...query, view: view}}} /*to={}*/ className="dropdown-item">
            <MenuItem>
              <FormattedMessage id={"posts."+view}/>
            </MenuItem>
          </LinkContainer>
        )}
        <LinkContainer to={"/daily"} /*to={{name: "posts.daily"}}*/ className="dropdown-item">
          <MenuItem className={"bar"}>
            <FormattedMessage id="posts.daily"/>
          </MenuItem>
        </LinkContainer>
      </DropdownButton>
    </div>
  )
}

PostsViews.propTypes = {
  defaultView: React.PropTypes.string
}

PostsViews.defaultProps = {
  defaultView: "hot"
}

PostsViews.contextTypes = {
  currentRoute: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  intl: intlShape
};

PostsViews.displayName = "PostsViews";

module.exports = withRouter(PostsViews);
