import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Resources = () => (
  <div className="page-resources page-container">
    <Helmet title="Resources | Pool Pros" />
    <h2 className="resources__title">Resources</h2>
    <div className="resources__resource">
      <h3 className="resources__subtitle">How to open a pool?</h3>
      <ul className="resources__list">
        <li className="resources__item">
          <a href="https://www.swimuniversity.com/open-inground-pool/">
            How to Open an Inground Pool in 10 Steps
          </a>
        </li>
        <li className="resources__item">
          <a href="http://www.lesliespool.com/blog/pool-care/pool-openings/how-to-open-your-pool-in-the-spring/">
            How to Open Your Pool in the Spring
          </a>
        </li>
        <li className="resources__item">
          <a href="https://www.youtube.com/watch?v=UhgIOJC5ue4">
            How To Open Your Inground Swimming Pool!
          </a>
        </li>
        <li className="resources__item">
          <a href="https://www.wikihow.com/Open-a-Swimming-Pool">
            How to Open a Swimming Pool (with Pictures)
          </a>
        </li>
        <li className="resources__item">
          <a href="http://www.swimmingpool.com/maintenance/general-maintenance-and-tips/opening-your-pool">
            Opening Your Pool
          </a>
        </li>
      </ul>
    </div>

    <div className="resources__resource">
      <h3 className="resources__subtitle">How to maintain a pool?</h3>
      <ul className="resources__list">
        <li className="resources__item">
          <a href="https://www.youtube.com/watch?v=TDQSSYwhWEM">
            How to Maintain A Swimming Pool
          </a>
        </li>
        <li className="resources__item">
          <a href="http://www.kem-tek.com/kemtek_howto/how-maintain-and-treat-pool/">
            How-to Maintain and Treat Pool Water
          </a>
        </li>
        <li className="resources__item">
          <a href="http://www.swimmingpool.com/maintenance/pool-care-basics">
            Pool Care Basics
          </a>
        </li>
        <li className="resources__item">
          <a href="https://www.tripsavvy.com/pool-maintenance-tips-2682532">
            15 Pool Maintenance Tips to Keep Your Pool Clean
          </a>
        </li>
        <li className="resources__item">
          <a href="https://www.swimuniversity.com/new-pool-owner/">
            A Beginner's Guide to Swimming Pool Maintenance
          </a>
        </li>
      </ul>
    </div>

    <div className="resources__resource">
      <h3 className="resources__subtitle">How to close a pool?</h3>
      <ul className="resources__list">
        <li className="resources__item">
          <a href="https://www.swimuniversity.com/how-to-close-your-inground-swimming-pool/">
            How to Close An Inground Pool in 6 Steps
          </a>
        </li>
        <li className="resources__item">
          <a href="https://www.youtube.com/watch?v=_VV7_MR4HTo">
            How to Close an Inground Swimming Pool
          </a>
        </li>
        <li className="resources__item">
          <a href="https://www.lowes.com/projects/other-activities/close-your-pool-for-winter/project">
            Close Your Pool for Winter
          </a>
        </li>
        <li className="resources__item">
          <a href="http://www.lesliespool.com/blog/top-ten-tips-for-closing-your-pool/">
            Top Ten Tips for Closing Your Pool
          </a>
        </li>
        <li className="resources__item">
          <a href="http://www.poolcenter.com/winterClosings">
            Pool winter closings, winterizing swimming pools
          </a>
        </li>
        <li className="resources__item">
          <a href="http://blog.poolcenter.com/article.aspx?articleid=6139">
            10 Steps - How to Winterize an In Ground Pool
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Resources
