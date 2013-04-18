#include <cv.h>
#include <highgui.h>

int main ( int argc, char **argv )
{
    cvNamedWindow( "Hello, OpenCV", 1 );
    IplImage *img = cvCreateImage( cvSize( 800, 600 ), IPL_DEPTH_8U, 1 );
    CvFont font;
    double hScale = 2.0;
    double vScale = 2.0;
    int lineWidth = 1;
    cvInitFont( &font, CV_FONT_HERSHEY_SIMPLEX | CV_FONT_ITALIC, hScale, vScale, 0, lineWidth );
    cvPutText( img, "Hello,", cvPoint( 250, 150 ), &font, cvScalar( 255, 255, 0 ) );
    cvPutText( img, "Wonderful", cvPoint( 250, 250 ), &font, cvScalar( 255, 255, 0 ) );
    cvPutText( img, "OpenCV", cvPoint( 250, 350 ), &font, cvScalar( 255, 255, 0 ) );
    cvPutText( img, "World!", cvPoint( 250, 450 ), &font, cvScalar( 255, 255, 0 ) );
    cvShowImage( "Hello, OpenCV", img );
    cvWaitKey();
    return 0;
}
