import React from "react";

interface AvatarProps {
  source: {
    src: string;
    description: string;
  };
}
export default class Avatar extends React.Component<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props);
    this.state = {
      activityUser: true,
    };
  }
  componentDidMount() {
    this.setState({
      activityUser: false,
    });
  }
  render() {
    // console.log(this.state);

    return (
      <img
        src={this.props.source.description}
        alt={this.props.source.description}
      />
    );
  }
}
