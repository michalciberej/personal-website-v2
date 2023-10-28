import Form from '../Form';
import SectionHeading from '../SectionHeading';
import Socials from '../Socials';

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div className='flex flex-col items-start pb-20 bg-transparent px-[4vw] md:px-[10vw] text-text -mt-10 md:-mt-20 xl:-mt-32'>
          <SectionHeading
            num='03'
            black={true}>
            Contact
          </SectionHeading>
          <div className='flex flex-col justify-between lg:flex-row w-full gap-8'>
            <div>
              <p className='text-xl md:pl-12 flex flex-col gap-4'>
                <span className='block'>
                  I am currently looking for an opportunity.
                </span>
                <span className='block'>
                  Send me a messege and I will get to you asap.
                </span>
              </p>
            </div>
            <div className='flex place-self-end space-x-4 w-full max-w-[35rem]'>
              <Socials
                column={true}
                black={true}
              />
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
