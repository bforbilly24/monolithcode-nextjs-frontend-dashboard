import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";
const TimelineWithPing = () => {
  return (

      <div className="max-w-[600px]">
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    User Photo Changed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  12 minutes ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Jone Doer changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Video Added
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  1 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Mores Clarke added new video
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Designed Completed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  5 hour ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    Weekly Report
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  a day ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                The weekly report was uploaded
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <ul className="tm-wrapper">
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      User Photo Changed
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    12 minutes ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Jone Doer changed his avatar photo
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-primary tm-dot-ping tm-dot-ping-primary"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Video Added
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    1 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Mores Clarke added new video
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-info"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Designed Completed
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    5 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* timeline separator start */}
            <div className="tm-separator">
              <div className="tm-dot tm-dot-warning"></div>
              <div className="tm-connector"></div>
            </div>
            {/* timeline separator end */}
            <div className="tm-content-wrapper">
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Weekly Report
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    a day ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1">
                  The weekly report was uploaded
                </p>
              </div>
            </div>
          </li>
        </ul>
    </div>
  );
};

export default TimelineWithPing;
