/** @jsx jsx */

import React from 'react'; //eslint-disable-line
import { jsx, Box } from 'theme-ui';
import { darken } from '@theme-ui/color';
import moment from 'moment';
import Link from './link';

import { useAuth } from '../../hooks/use-auth';

export default function GuestList() {
  const { guestbookLog } = useAuth();

  const guests = guestbookLog();
  class Signature extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    render() {
      const { data } = this.state;

      const itemList = data.map(function (item) {
        let signedDate = moment(item.updatedAt).format(
          'MM/DD/YYYY [at] h:mm:ss a'
        );

        return (
          <Box
            key={item.ethAddress}
            sx={{
              borderBottom: '1px solid',
              borderColor: darken('background', 0.025),
              my: '1rem',
            }}
          >
            <small sx={{ m: 0, p: '0 0 1rem', fontWeight: 'bold' }}>
              {signedDate}
            </small>
            <p sx={{ m: 0, p: '0 0 1rem' }}>
              <Link
                href={'https://etherscan.io/address/' + item.ethAddress}
                sx={{ fontWeight: 'normal', textDecoration: 'none' }}
              >
                {item.ethAddress}
              </Link>
            </p>
          </Box>
        );
      });
      return (
        <Box
          key="guestbook"
          sx={{
            borderTop: '1px solid',
            borderColor: darken('background', 0.25),
            width: ['100%', '61.8%'],
          }}
        >
          {itemList}
        </Box>
      );
    }
    componentDidMount() {
      guests.then((data) => {
        this.setState({ data });
      });
    }
  }

  return <Signature />;
}