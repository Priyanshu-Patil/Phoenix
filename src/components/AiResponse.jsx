import PropTypes from 'prop-types';
import { iconLogo } from '../assets/assets';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconBtn } from './Button';

const AiResponse = ({ aiResponse, children }) => {
  const code = ({ children, className, ...rest }) => {
    const match = className?.match(/language-(\w+)/);

    return match ? (
      <>
        <div className='code-block'>
          <div className='p-4 pb-0 font-sans'>{match[0]}</div>

          <SyntaxHighlighter
            {...rest}
            PreTag='div'
            language={match[1]}
            style={hopscotch}
            customStyle={{
                marginBlock: '0',
                padding: '2px'
            }}
            codeTagProps={{
                style: {
                    padding: '14px',
                    fontWeight: '600',
                }
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>

        <div className="">
            <p>
                Use code
                <a href="http://gemini.google.com/faq#coding" className='link ms-2' target='blank'>with caution.</a>
            </p>

            <IconBtn icon='content_copy' size='small' title='Copy Code' />
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    );
  };

  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          width={32}
          height={32}
          alt='Phoenix logo'
        />
      </figure>
      {children}
      <div className='markdown-content'>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{ code }}
        >
          {aiResponse}
        </Markdown>
      </div>
    </div>
  );
};

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
};

export default AiResponse;
