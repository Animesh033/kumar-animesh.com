import { useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import data from "../data/index.json"

function Portfolio() {

  const portfolios = data.projects
  useEffect(() => {
    // applyFilter();

    return () => {
      // console.log("destroyed");
    };
  });

  const applyFilter = () => {
    // Portfolio isotope and filter
    const portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("active");
      $(this).addClass("active");
      portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });
  };
  return (
    <>
      <h1 className="pb-3 mb-5 title">Portfolio</h1>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="mb-2 text-center col-12">
              <ul className="mb-4 list-inline" id="portfolio-flters">
                <li className="btn btn-secondary active" data-filter="*">
                  <i className="fa fa-star me-2" />
                  Full Stack
                </li>
                <li className="btn btn-secondary" data-filter=".first">
                  <i className="fa fa-laptop-code me-2" />
                  Front End
                </li>
                <li className="btn btn-secondary" data-filter=".second">
                  <i className="fa fa-mobile-alt me-2" />
                  Back End
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {
              portfolios.map(portfolio => {
                return <PortfolioCard key={portfolio.imgName} imgName={portfolio.imgName} imgPath={portfolio.imgPath} imgLink={portfolio.imgLink} isBackend={portfolio.isBackend} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
