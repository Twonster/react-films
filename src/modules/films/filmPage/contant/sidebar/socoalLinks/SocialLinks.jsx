import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Preloader from '../../../../../../components/preloader/Preloader'

import SocialIcon from '../../../../../../components/social-icons/SocialNetIcon'

import fb_ico from '../../../../../../images/icons/facebook-ico.png'
import insta_ico from '../../../../../../images/icons/instagram-ico.png'
import twit_ico from '../../../../../../images/icons/twitter-ico.png'
import home_ico from '../../../../../../images/icons/link-ico.png'

const Wrapper = styled.div`
    display: flex;
    margin: 0 0 30px 0;
`

const SocialLinks = (props) => {
    const { movie, external_ids } = useSelector(({ filmDataReducer: { response } }) => response)
    const networks = {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/'
    }
    return (
        <Wrapper>
            {external_ids.data.loading
            ? 
            <Preloader />
            :    
            <>
                {external_ids.data.facebook_id && <SocialIcon link={networks.facebook} id={external_ids.data.facebook_id} ico={fb_ico} />}
                {external_ids.data.instagram_id && <SocialIcon link={networks.instagram} id={external_ids.data.instagram_id} ico={insta_ico} />}
                {external_ids.data.twitter_id && <SocialIcon link={networks.twitter} id={external_ids.data.twitter_id} ico={twit_ico} />}
                {movie.data.homepage && <SocialIcon id={movie.data.homepage} ico={home_ico} />}
            </>
        }
        </Wrapper>
    )
}

export default SocialLinks
