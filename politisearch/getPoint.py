import os
import sys

import sys
import os
import math

#import metapy

def axis_value(input_tweets, topic1_text, topic1_prior, topic2_text, topic2_prior, background_text, background_prior):
    total_1 = 0.0
    total_2 = 0.0
    total_back = 0.0

    topic1 = {}
    with open(topic1_text, 'r',) as f_topic1:
        for line in f_topic1:
            line = line.strip()
            words = line.split("\t")
            topic1[words[0]] = float(words[1])

    topic2 = {}
    with open(topic2_text, 'r') as f_topic2:
        for line in f_topic2:
            line = line.strip()
            words = line.split("\t")
            topic2[words[0]] = float(words[1])

    background = {}
    with open(background_text, 'r') as f_background:
        for line in f_background:
            line = line.strip()
            words = line.split("\t")
            background[words[0]] = float(words[1])


    f_tweets = input_tweets
    for line in f_tweets:
        cleanedLine = line.strip()
        if cleanedLine:
            for word in line.split():
                
                topic1_prob = topic1.get(word)
                if topic1_prob is None:
                    topic1_prob = 0
                topic1_prob = topic1_prob* topic1_prior

                topic2_prob = topic2.get(word)
                if topic2_prob is None:
                    topic2_prob = 0
                topic2_prob = topic2_prob* topic2_prior

                background_prob = background.get(word)
                if background_prob is None:
                    background_prob = 0
                background_prob = background_prob*background_prior

                if background_prob > topic1_prob and background_prob > topic2_prob:
                    total_back += 1
                elif topic1_prob > background_prob and topic1_prob > topic2_prob:
                    total_1 += 1
                else:
                    total_2 += 1
    if (total_2 + total_1 + total_back) == 0:
   	 return -1
    coverage_2 = total_2/(total_2 + total_1 + total_back)
    coverage_1 = total_1/(total_2 + total_1 + total_back)
    total = coverage_2 - coverage_1
    return total

try:
	in_text = sys.argv[1].split(" ")
	
	in_tweets = []
	
	for token in in_text:
		word = token.lower()
		if len(word) == 0:
			pass
		else:
			in_tweets.append(word)

	outStr = str(axis_value(in_tweets,"Ideologies/liberalismLM.txt", 0.33, "Ideologies/conservatismLM.txt", 0.33, "Ideologies/backgroundLM.txt", 0.33))
	outStr = outStr + ","
	outStr = outStr + str(axis_value(in_tweets,"Ideologies/libertarianLM.txt", 0.33, "Ideologies/authoritarianLM.txt", 0.33, "Ideologies/backgroundLM.txt", 0.33))
	print(outStr)
except Exception as e:
	print(e)
	