'use client'; // if using app directory in Next.js 13+

import { useState } from 'react';

const ReviewSection = () => {
  const [star, setStar] = useState(4.0);
  const [formData, setFormData] = useState({
    name: '',
    review_msg: '',
  });

  const handleStarClick = (value) => setStar(value);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit logic here (API call etc.)
    console.log({ ...formData, star });
  };

  return (
    <div className="dicegamessos_game_box">
      <div className="review_form_main">
        <h3 className="game_info_page_subtitle mb_0">Reviews</h3>
        <form
          onSubmit={handleSubmit}
          id="game_review_Form"
          className="game_review_form"
          noValidate
        >
          <div className="review_form">
            <div className="review_form_wrap row align_center">
              <input type="hidden" name="id" value="1731" />
              <input type="hidden" name="star" value={star} className="star_num" />

              <div className="review_rate_grid">
                <p>Please Rate This Game</p>
                <div className="review_rate_box">
                  <ul className="review_rate_item row js_center">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <li
                        key={val}
                        className={`rate_icon row align_center js_center ${val <= star ? 'rate_icon_solid' : ''}`}
                        data-value={val}
                        onClick={() => handleStarClick(val)}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="iconfont icon-xing" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="review_form_group_box">
                <textarea
                  name="review_msg"
                  className="review_textarea form_control"
                  placeholder="What do you think of this game?"
                  required
                  value={formData.review_msg}
                  onChange={handleChange}
                />
                <div className="review_use_name_box row">
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="form_control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <button type="submit" className="submit_button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <ul className="review_list_wrap">
          {[
            {
              name: "Aouie Basilan",
              date: "07 November, 2023",
              rating: 5,
              message:
                "CSR 2 excels in realistic drag racing! Engaging races, authentic cars, and thrilling gameplay. A visually striking and entertaining experience that sets the standard for virtual drag racing.",
            },
            {
              name: "Asthetıc Flowers",
              date: "07 November, 2023",
              rating: 5,
              message:
                "CSR 2 Realistic Drag Racing is a dragster's dream! Stunning graphics, realistic cars, and intense races. A perfect blend of speed and realism that captivates racing enthusiasts.",
            },
          ].map((review, idx) => (
            <li className="user_review_info" key={idx}>
              <h3>{review.name}</h3>
              <div className="row align_center user_review_info_rate">
                <ul className="review_rate_item row">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li
                      key={i}
                      className={`rate_icon row align_center js_center ${
                        i < review.rating ? 'rate_icon_solid' : ''
                      }`}
                    >
                      <i className="iconfont icon-xing" />
                    </li>
                  ))}
                </ul>
                <p className="user_info_date_text">{review.date}</p>
              </div>
              <p>{review.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewSection;
