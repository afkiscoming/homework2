import SchoolLogo from "./SchoolLogo"
import UserInfo from "./userInfo"

const NavTop = ({ user }) => {

    return (
        <div className="nav-top">
            <div className="left-container">
                <SchoolLogo schoolName={user.school} />
                <UserInfo user={user} />
            </div>

            <div className="right-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                    <path d="M 1 3 L 1 15 L 49 15 L 49 3 Z M 3 17 L 3 48 L 47 48 L 47 17 Z M 17.5 20 L 32.5 20 C 33.882813 20 35 21.117188 35 22.5 C 35 23.882813 33.882813 25 32.5 25 L 17.5 25 C 16.117188 25 15 23.882813 15 22.5 C 15 21.117188 16.117188 20 17.5 20 Z"></path>
                </svg>

                <svg width="40" height="40" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6.52632H17V5.52632H16V6.52632ZM16 20.3421L16.9607 20.6196L17 20.4836V20.3421H16ZM14.2692 22V23H14.3995L14.5254 22.9666L14.2692 22ZM2.73077 22L2.47458 22.9666L2.6005 23H2.73077V22ZM1 20.3421H0V20.4836L0.0392755 20.6196L1 20.3421ZM1 6.52632V5.52632H0V6.52632H1ZM4.46154 4.03947L3.46279 3.98949L3.46154 4.01447V4.03947H4.46154ZM12.5385 4.03947H13.5385V4.01447L13.5372 3.98949L12.5385 4.03947ZM11.5385 9.28947C11.5385 9.84176 11.9862 10.2895 12.5385 10.2895C13.0907 10.2895 13.5385 9.84176 13.5385 9.28947H11.5385ZM3.46154 9.28947C3.46154 9.84176 3.90925 10.2895 4.46154 10.2895C5.01382 10.2895 5.46154 9.84176 5.46154 9.28947H3.46154ZM15 6.52632V20.3421H17V6.52632H15ZM16 20.3421C15.0393 20.0646 15.0393 20.0645 15.0394 20.0643C15.0394 20.0643 15.0394 20.0641 15.0394 20.0641C15.0395 20.0639 15.0395 20.0637 15.0396 20.0636C15.0397 20.0633 15.0397 20.063 15.0398 20.0628C15.0399 20.0624 15.04 20.0621 15.04 20.062C15.0401 20.0619 15.0399 20.0624 15.0396 20.0635C15.0389 20.0658 15.0375 20.0706 15.0353 20.0776C15.0308 20.0917 15.0235 20.1145 15.0135 20.1439C14.9932 20.2035 14.9632 20.2856 14.9254 20.3743C14.8869 20.4646 14.845 20.5503 14.8029 20.6214C14.7577 20.6978 14.7306 20.7259 14.7313 20.7252L16.1148 22.1695C16.4479 21.8505 16.6565 21.4133 16.7649 21.1592C16.8267 21.0143 16.8742 20.884 16.9064 20.7897C16.9226 20.7421 16.9353 20.7026 16.9444 20.6736C16.9489 20.6591 16.9526 20.6471 16.9553 20.6381C16.9566 20.6335 16.9578 20.6297 16.9587 20.6266C16.9591 20.625 16.9595 20.6237 16.9599 20.6225C16.96 20.6219 16.9602 20.6214 16.9603 20.6209C16.9604 20.6207 16.9605 20.6204 16.9605 20.6202C16.9606 20.6201 16.9606 20.62 16.9606 20.6199C16.9607 20.6198 16.9607 20.6196 16 20.3421ZM14.7313 20.7252C14.7341 20.7226 14.7269 20.7298 14.7046 20.7451C14.683 20.7599 14.6535 20.7782 14.6153 20.7989C14.5377 20.841 14.4448 20.8826 14.348 20.9205C14.2528 20.9578 14.1647 20.9873 14.1007 21.0073C14.0691 21.0172 14.0444 21.0245 14.0288 21.0289C14.0211 21.0311 14.0157 21.0326 14.0129 21.0334C14.0116 21.0338 14.0109 21.034 14.0109 21.034C14.0109 21.034 14.0111 21.0339 14.0114 21.0338C14.0116 21.0338 14.0118 21.0337 14.0121 21.0336C14.0122 21.0336 14.0124 21.0336 14.0125 21.0335C14.0126 21.0335 14.0127 21.0335 14.0128 21.0334C14.0129 21.0334 14.013 21.0334 14.2692 22C14.5254 22.9666 14.5256 22.9666 14.5257 22.9666C14.5258 22.9665 14.5259 22.9665 14.526 22.9665C14.5262 22.9664 14.5264 22.9664 14.5267 22.9663C14.5271 22.9662 14.5276 22.966 14.5282 22.9659C14.5293 22.9656 14.5307 22.9652 14.5322 22.9648C14.5352 22.964 14.5391 22.963 14.5436 22.9617C14.5527 22.9592 14.5648 22.9558 14.5796 22.9516C14.609 22.9431 14.6494 22.9312 14.6982 22.916C14.7948 22.8857 14.9284 22.841 15.0771 22.7828C15.3367 22.6812 15.7852 22.4853 16.1148 22.1695L14.7313 20.7252ZM14.2692 21H2.73077V23H14.2692V21ZM2.73077 22C2.98696 21.0334 2.98709 21.0334 2.98722 21.0334C2.98726 21.0335 2.98739 21.0335 2.98747 21.0335C2.98763 21.0336 2.98778 21.0336 2.98791 21.0336C2.98818 21.0337 2.98841 21.0338 2.98859 21.0338C2.98895 21.0339 2.98913 21.034 2.98913 21.034C2.98913 21.034 2.98843 21.0338 2.98706 21.0334C2.98432 21.0326 2.97893 21.0311 2.97118 21.0289C2.95564 21.0245 2.93093 21.0172 2.89932 21.0073C2.83528 20.9873 2.74722 20.9578 2.652 20.9205C2.5552 20.8826 2.46235 20.841 2.38468 20.7989C2.34653 20.7782 2.31696 20.7599 2.29536 20.7451C2.2731 20.7298 2.26588 20.7226 2.26866 20.7252L0.885182 22.1695C1.21484 22.4853 1.66331 22.6812 1.92286 22.7828C2.07157 22.841 2.20518 22.8857 2.30183 22.916C2.35057 22.9312 2.39095 22.9431 2.42042 22.9516C2.43518 22.9558 2.44727 22.9592 2.45639 22.9617C2.46095 22.963 2.46477 22.964 2.46781 22.9648C2.46933 22.9652 2.47066 22.9656 2.47179 22.9659C2.47235 22.966 2.47287 22.9662 2.47333 22.9663C2.47357 22.9664 2.47379 22.9664 2.47399 22.9665C2.4741 22.9665 2.47424 22.9665 2.47429 22.9666C2.47444 22.9666 2.47458 22.9666 2.73077 22ZM2.26866 20.7252C2.26938 20.7259 2.2423 20.6978 2.19709 20.6214C2.155 20.5503 2.11315 20.4646 2.07464 20.3743C2.03679 20.2856 2.00682 20.2035 1.98649 20.1439C1.97646 20.1145 1.96915 20.0917 1.96474 20.0776C1.96254 20.0706 1.96109 20.0658 1.96041 20.0635C1.96007 20.0624 1.95992 20.0619 1.95998 20.062C1.96 20.0621 1.96008 20.0624 1.9602 20.0628C1.96026 20.063 1.96034 20.0633 1.96042 20.0636C1.96047 20.0637 1.96052 20.0639 1.96057 20.0641C1.96059 20.0641 1.96063 20.0643 1.96064 20.0643C1.96068 20.0645 1.96072 20.0646 1 20.3421C0.0392755 20.6196 0.0393186 20.6198 0.0393625 20.6199C0.0393783 20.62 0.0394233 20.6201 0.0394549 20.6202C0.0395184 20.6204 0.0395854 20.6207 0.0396559 20.6209C0.0397971 20.6214 0.0399526 20.6219 0.0401223 20.6225C0.0404619 20.6237 0.0408587 20.625 0.0413126 20.6266C0.0422201 20.6297 0.0433565 20.6335 0.0447194 20.6381C0.0474437 20.6471 0.0510819 20.6591 0.0556151 20.6736C0.064665 20.7026 0.0773784 20.7421 0.0936119 20.7897C0.125794 20.884 0.173251 21.0143 0.235104 21.1592C0.343496 21.4133 0.552126 21.8505 0.885182 22.1695L2.26866 20.7252ZM2 20.3421V6.52632H0V20.3421H2ZM1 7.52632H4.46154V5.52632H1V7.52632ZM4.46154 7.52632H12.5385V5.52632H4.46154V7.52632ZM12.5385 7.52632H16V5.52632H12.5385V7.52632ZM5.46154 6.52632V4.03947H3.46154V6.52632H5.46154ZM4.46154 4.03947C5.46029 4.08946 5.46026 4.09007 5.46023 4.09067C5.46022 4.09085 5.46019 4.09144 5.46017 4.09181C5.46013 4.09256 5.46009 4.09326 5.46005 4.09391C5.45998 4.09523 5.45991 4.09638 5.45986 4.09735C5.45974 4.09931 5.45965 4.1006 5.4596 4.10125C5.45951 4.10253 5.45959 4.10126 5.45993 4.09761C5.46061 4.09027 5.46232 4.07356 5.46582 4.04885C5.47285 3.99912 5.48678 3.91907 5.51311 3.81904C5.56642 3.61644 5.66582 3.34972 5.84671 3.0873C6.17251 2.6147 6.86509 2 8.5 2V0C6.24855 0 4.92191 0.905037 4.20006 1.95217C3.85713 2.44963 3.67561 2.94277 3.57895 3.31007C3.53029 3.495 3.50198 3.6524 3.48551 3.76889C3.47725 3.82729 3.47191 3.87589 3.46846 3.91307C3.46674 3.93168 3.46548 3.94747 3.46458 3.96026C3.46413 3.96666 3.46376 3.97231 3.46347 3.97719C3.46332 3.97963 3.46319 3.98187 3.46308 3.98392C3.46302 3.98495 3.46297 3.98593 3.46292 3.98686C3.4629 3.98732 3.46286 3.98798 3.46285 3.98821C3.46282 3.98886 3.46279 3.98949 4.46154 4.03947ZM8.5 2C10.1349 2 10.8275 2.6147 11.1533 3.0873C11.3342 3.34972 11.4336 3.61645 11.4869 3.81904C11.5132 3.91907 11.5271 3.99912 11.5342 4.04886C11.5377 4.07356 11.5394 4.09027 11.5401 4.09761C11.5404 4.10126 11.5405 4.10253 11.5404 4.10125C11.5403 4.1006 11.5403 4.09931 11.5401 4.09736C11.5401 4.09638 11.54 4.09523 11.5399 4.09392C11.5399 4.09326 11.5399 4.09256 11.5398 4.09181C11.5398 4.09144 11.5398 4.09085 11.5398 4.09067C11.5397 4.09007 11.5397 4.08946 12.5385 4.03947C13.5372 3.98949 13.5372 3.98886 13.5371 3.98821C13.5371 3.98798 13.5371 3.98732 13.5371 3.98685C13.537 3.98593 13.537 3.98495 13.5369 3.98392C13.5368 3.98187 13.5367 3.97963 13.5365 3.97719C13.5362 3.97231 13.5359 3.96666 13.5354 3.96026C13.5345 3.94747 13.5333 3.93167 13.5315 3.91307C13.5281 3.87589 13.5227 3.82729 13.5145 3.76889C13.498 3.6524 13.4697 3.495 13.421 3.31007C13.3244 2.94276 13.1429 2.44962 12.7999 1.95217C12.0781 0.905037 10.7514 0 8.5 0V2ZM11.5385 4.03947V6.52632H13.5385V4.03947H11.5385ZM11.5385 5.97368V9.28947H13.5385V5.97368H11.5385ZM3.46154 5.97368V9.28947H5.46154V5.97368H3.46154Z" fill="gray" />
                </svg>

                <svg width="40" height="40" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6.04687C22 3.125 19.6495 1 16.75 1C13.8505 1 11.5 3.92188 11.5 3.92188C11.5 3.92188 9.1495 1 6.25 1C3.35051 1 1 3.125 1 6.04687C1 11.625 11.5 18 11.5 18C11.5 18 22 11.625 22 6.04687Z" stroke="gray" strokeWidth="2" />
                </svg>

                <img src={user.profilePic} alt="" style={{ width: '40px', height: '40px', borderRadius: '30px' }} className="profile-pic" />

            </div>
        </div>
    )
}

export default NavTop